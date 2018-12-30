"use strict";

export function env(context: any, req: any) {
    return new Promise<void>(resolve => {
        context.log('JavaScript HTTP trigger function processed a request.');

        context.res = {
            body: JSON.stringify(process.env, null, "\t")
        };

        resolve();
    });
}