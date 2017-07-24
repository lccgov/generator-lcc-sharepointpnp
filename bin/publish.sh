#!/bin/sh
set -e
VERSION_LATEST=`cat package.json | jq -r '.version'`
VERSION_REGISTRY=`npm view generator-lcc-sharepointpnp version`
echo "VERSION_LATEST $VERSION_LATEST";
echo "VERSION_REGISTRY $VERSION_REGISTRY";

if [ "$VERSION_LATEST" != "$VERSION_REGISTRY" ]; then
    echo "publishing $VERSION_LATEST";
    npm publish
else
    echo "Version is the same as the version available on the registry $VERSION_LATEST";
fi