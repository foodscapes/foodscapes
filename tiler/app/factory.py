from dataclasses import dataclass

from titiler.core import TilerFactory


class SimpleTiler(TilerFactory):
    """Simple Tiler with /tile and /point endpoints only."""

    def register_routes(self):
        self.tile()
        self.point()
