# Surf 'n Show surfboard volume calculator

This is a website that implements the approach to finding your surfboard volume in liters as described by Noel Salas of [Surf 'n Show](https://surfnshow.com/) in the video [Surf Tip "How to Dial in Your Surfboard Liter Range"](https://www.youtube.com/watch?v=VC27e24abDc).

## Installation

1. Install [PurgeCSS](https://purgecss.com/)
1. Install [clean-css](https://github.com/jakubpawlowicz/clean-css)
1. `$ git clone https://github.com/robertlove/volume.git`

## Usage

### Viewing the site

Open `index.html` in a browser.

### Remove unused CSS

```
$ purgecss --config ./purgecss.config.js
```

### Minify CSS

```
$ cleancss -o css/style.css css/style.css
```

## Contributing

See [Contributing](https://github.com/robertlove/.github/blob/master/CONTRIBUTING.md).

## Credits

See [Contributors](https://github.com/robertlove/volume/graphs/contributors).

## License

See [LICENSE](LICENSE).
