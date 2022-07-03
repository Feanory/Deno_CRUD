import {qrcode} from "https://deno.land/x/qrcode/mod.ts";

const img = await qrcode("https://bitbucket.org/workspaces/clever-stock/avatar/?ts=1590529734");
const encoder = new TextEncoder();

const data = encoder.encode(`<img src="${img}" />`)

await Deno.writeFile('img.html', data);