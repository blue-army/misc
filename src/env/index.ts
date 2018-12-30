"use strict";

export function env(context: any, req: any) {
    context.log('one');
    return new Promise<void>(resolve => {
        context.log('two');
        context.log('JavaScript HTTP trigger function processed a request.');

        context.res = {
            body: JSON.stringify(process.env, null, "\t")
        };

        context.log('three');
        resolve();
        context.log('four');
    });
}