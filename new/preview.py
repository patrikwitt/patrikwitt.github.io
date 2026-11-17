"""Preview or export only public website files; private drafts are never copied."""
from pathlib import Path
import argparse
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import shutil
import tempfile

ROOT = Path(__file__).resolve().parent
PUBLIC = ('index.html', 'css', 'js', 'images')


def export_site(destination):
    destination = Path(destination).resolve()
    if destination == ROOT or ROOT in destination.parents:
        raise ValueError('Export outside /new to keep source and public output separate.')
    destination.mkdir(parents=True, exist_ok=True)
    if any(destination.iterdir()):
        raise ValueError('Choose an empty export directory.')
    for name in PUBLIC:
        source = ROOT / name
        candidates = [source, *source.rglob("*")] if source.is_dir() else [source]
        if any(path.is_symlink() for path in candidates):
            raise ValueError("Public assets must be real files, not symlinks to private source.")
        if source.is_dir():
            shutil.copytree(source, destination / name,
                            ignore=shutil.ignore_patterns('.*', '*.pdf', '*.PDF'),
                            symlinks=False)
        else:
            shutil.copy2(source, destination / name)
    return destination


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--export', type=Path, help='Write public files to an empty directory.')
    parser.add_argument('--port', type=int, default=8000)
    args = parser.parse_args()
    if args.export:
        print(f'Public site exported to {export_site(args.export)}')
    else:
        with tempfile.TemporaryDirectory(prefix='speedgame-public-') as directory:
            export_site(directory)
            handler = functools.partial(SimpleHTTPRequestHandler, directory=directory)
            with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
                print(f'Preview: http://127.0.0.1:{args.port}/ (private drafts excluded)', flush=True)
                try:
                    server.serve_forever()
                except KeyboardInterrupt:
                    pass
