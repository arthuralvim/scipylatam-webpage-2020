# Makefile scipylatam-webpage-2020

.PHONY: build build.static check.lektor_password check.lektor_username clean clean-build clean-lektor clean-others clean-pyc clean-test deploy.develop deploy.production info lektor_plugins server

clean: clean-build clean-others clean-pyc clean-test clean-lektor

clean-build:
	@rm -fr build/
	@rm -fr dist/
	@rm -fr .eggs/
	@find . -name '*.egg-info' -exec rm -fr {} +
	@find . -name '*.egg' -exec rm -f {} +

clean-others:
	@find . -name 'Thumbs.db' -exec rm -f {} \;

clean-pyc:
	@find . -name '*.pyc' -exec rm -f {} +
	@find . -name '*.pyo' -exec rm -f {} +
	@find . -name '*~' -exec rm -f {} +
	@find . -name '__pycache__' -exec rm -fr {} +

clean-test:
	@rm -fr .tox/
	@rm -f .coverage
	@rm -fr htmlcov/

clean-lektor:
	@lektor clean --yes

check.lektor_username:
	@if test "$(LEKTOR_DEPLOY_USERNAME)" = "" ; then echo "LEKTOR_DEPLOY_USERNAME is undefined. The default is tests."; fi

check.lektor_password:
	@if test "$(LEKTOR_DEPLOY_PASSWORD)" = "" ; then echo "LEKTOR_DEPLOY_PASSWORD is undefined. The default is tests."; fi

lektor_plugins:
	@lektor plugins reinstall

build:
	@echo "Build started on `date`"
	@lektor build -f webpack
	@echo "Build completed on `date`"

build.static:
	@echo "Build started on `date`"
	@cd webpack && npm run start
	@echo "Build completed on `date`"

server:
	@lektor server -f webpack

info:
	@lektor project-info

deploy.develop: check.lektor_username check.lektor_password
	@echo "Deploy started on `date`"
	@lektor deploy develop
	@echo "Deploy completed on `date`"

deploy.production: check.lektor_username check.lektor_password
	@echo "Deploy started on `date`"
	@lektor deploy production
	@echo "Deploy completed on `date`"
