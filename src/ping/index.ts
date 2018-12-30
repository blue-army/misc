"use strict";

export function ping(context: any, req: any) {
    context.log('one');

    return new Promise<void>(resolve => {

        context.log('two');

        if (req.query.name || (req.body && req.body.name)) {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Yo " + (req.query.name || req.body.name)
            };
        }
        else {
            context.res = {
                status: 400,
                body: "Please pass a name on the query string or in the request body"
            };
        }

        context.log('three');
        resolve();
        context.log('four');
    });
}
