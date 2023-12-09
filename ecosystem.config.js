// use pm2 to run nextjs in background

module.exports = {
    apps: [
        {
            name: "ethscriber",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3333", //running on port 3000
            watch: false,
        },
    ],
};
