"use strict";

export function env(context: any, req: any) {
    return new Promise<void>(resolve => {
        let data = {
            name: "john wick"
        }
        context.res = {
            body: JSON.stringify(data, null, "\t")
        };

        resolve();
    });
}