FROM node:18


ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /workspace

# Configure apt
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils 2>&1

# Verify git and usually needed tools are installed
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    # usually needed tools ------------------------
    git \
    procps \
    # glances \
    tree \
    vim \
    less \
    curl \
    wget \
    build-essential
    # others --------------------------------------


RUN npm install -g gatsby-cli

# cleanup
RUN apt-get clean && rm -rf /var/lib/apt/lists/*


ENV DEBIAN_FRONTEND=dialog

# Set the default shell to bash instead of sh
ENV SHELL /bin/bash
