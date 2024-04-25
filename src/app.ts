import { yarg } from "./config/plugins/yargs.plugin"
import { ServerApp } from "./presentation/server-app"


( async()=> {

    await main();

})();


async function main() {
    const { b:base, s:showTable, l:limit, d:fileDestination, n:fileName } = yarg;
    
    ServerApp.run( { base, limit, showTable, fileDestination, fileName } );
}