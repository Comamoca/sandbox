ARCH := $(shell uname -m)
DOCKER_IMAGE := "gerbil/gerbilxx:$(ARCH)"
default: linux-static

build-release:
	/opt/gerbil/bin/gxpkg deps -i
	/opt/gerbil/bin/gxpkg build --release

linux-static:
	docker run -it \
	-e USER=$(USER) \
	-e GERBIL_PATH=/src/.gerbil \
	-v $(PWD):/src:z \
	$(DOCKER_IMAGE) \
	make -C /src/ build-release

install:
	mv .gerbil/bin/gerbil-http-server /usr/local/bin/gerbil-http-server

clean:
	gerbil clean
	gerbil clean all
