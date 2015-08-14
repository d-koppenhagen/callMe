# callMe
## About
A simple WebRTC call interface using [simpleWebRTC](https://simplewebrtc.com/).
## What you need
- [NodeJS](https://nodejs.org)

## How to setup
1. clone this project
2. go to `src` folder and run `npm install` (maybe you need to install also dependencies)
3. run the app with `node server.js`
4. open the url in your browser (http://localhost:9000)
5. create an init.d script to run the callMe as a service (Debian)
    - edit the path after `APPLICATION_DIRECTORY` in the `callMe` file
    - run `sudo ./createInitScript.sh`
    - this will copy the file `callMe`to your `/etc/init.d` directory and make it excecutable
    - now you can start the callMe with `sudo service callMe start` (there are also the options `restart`, `stop` and `status`)
6. (optional) you can configure ar `VirtualHost` for apache, etc. like that:
```
<VirtualHost *:80>
    ServerAdmin yourMail@domain.com
    ServerName YOURSERVERNAME
    ServerAlias callMe.YOURDOMAIN.com

    ProxyRequests off

    <Proxy *>
        Order deny,allow
        Allow from all
    </Proxy>

    <location />
        ProxyPass http://localhost:9000/
        ProxyPassReverse http://localhost:9000/
    </location>
</VirtualHost>
```

## Configuration
- move file from the folder '/src/config.example.js' to '/src/config.js' and configure it

## How it looks like?
- a preview of the project is available on: http://call.d-koppenhagen.de/
