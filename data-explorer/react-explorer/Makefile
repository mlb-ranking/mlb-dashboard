.DEFAULT:
	yarn $@

.PHONY: update
update:
	@git checkout master
	@git fetch react-starter-kit
	@git merge react-starter-kit/master
	@yarn install