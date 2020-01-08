# -*- coding: utf-8 -*-

from collections import OrderedDict
import sys

from lektor.pluginsystem import Plugin

PY3 = sys.version_info[0] == 3


class SciPyLaPlugin(Plugin):
    name = 'SciPyLa Custom Lektor Plugin'
    description = 'This is a custom local plugin to add extra functionality.'

    DATE_FORMAT = "%Y-%m-%d %H:%M:%S"

    def on_setup_env(self, **extra):
        self.env.jinja_env.globals.update(dir=dir)
        self.env.jinja_env.globals.update(OrderedDict=OrderedDict)
