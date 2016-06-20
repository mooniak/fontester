# fontester

Live font testing on the browser

## Set up

### Install nodejs

### Set up `config.js`

```
    var fonts = [
            {
            name: '<style_name>',
            url: '/tester/fonts/<font_name>',
            weight: <css_weight>
            weight: <css_style>
            }, 
            {
            name: '<style_name>',
            url: '/tester/fonts/<font_name>',
            weight: <css_weight>
            weight: <css_style>
            }
        ];
        fontTesterMain(fonts);
```

## Run the server

`cd fontester`
`npm install`
`node server.js`

## Export your fonts

`./tester/fonts`

## Build test html files from markdown(Optional)

`node build_tests.js`