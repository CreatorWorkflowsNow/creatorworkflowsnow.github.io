#! /bin/sh

PRODUCT="Prince"
PROGRAM="prince"
VERSION="15.1"
WEBSITE="https://www.princexml.com"

prefix=${1:-/usr/local}

base=$( dirname "$0" )

cd "$base" || exit 1

echo "$PRODUCT $VERSION"
echo
echo "Install directory"
echo "    This is the directory in which $PRODUCT $VERSION will be installed."
echo "    Press Enter to accept the default directory or enter an alternative."
printf "    [%s]: " "$prefix"

IFS= read -r input
if [ ! -z "$input" ] ; then
    prefix="$input"
fi

echo
echo "Installing $PRODUCT $VERSION..."

install_dir () {
    install -d "$1"
}

install_bin () {
    install -m 755 "$1" "$2"
}

install_data () {
    install -m 644 "$1" "$2"
}

# Create shell script

cat > prince <<EOF
#! /bin/sh

exec "$prefix/lib/$PROGRAM/bin/$PROGRAM" --prefix="$prefix/lib/$PROGRAM" "\$@"
EOF

# Test that we can create directories

install_dir "$prefix/bin" 2>/dev/null ||
{
echo "    Unable to create directories in $prefix"
echo "    (You may need to be logged in as root to install programs in system"
echo "    directories. Ask your system administrator, or try installing inside"
echo "    your home directory, such as $HOME/$PROGRAM-$VERSION)."
echo
exit 1
}

# Install shell script

install_bin prince "$prefix/bin" || exit 1

# Install everything else

echo "Creating directories..."

for dir in $( find "lib/$PROGRAM" -type d ) ; do

    install_dir "$prefix/$dir" || exit 1

done

echo "Installing files..."

for file in $( find "lib/$PROGRAM" -type f ) ; do

    dir=$( dirname "$file" )

    if [ -x "$file" ] ; then
	install_bin "$file" "$prefix/$dir" || exit 1
    else
	if [ "$file" = "lib/$PROGRAM/license/license.dat" ] ; then
	    if [ ! -f "$prefix/$file" ] ; then
		install_data "$file" "$prefix/$dir" || exit 1
	    fi
	else
	    install_data "$file" "$prefix/$dir" || exit 1
	fi
    fi

done

echo
echo "Installation complete."
echo "    Thank you for choosing $PRODUCT $VERSION, we hope you find it useful."
echo "    Please visit $WEBSITE for updates and development news."
echo

