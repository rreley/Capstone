"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProspectService = {
    getAllProspects(db) {
        console.log("======== enter: getAllProspects");
        // console.log("==== dbClient methods: ");
        // console.log(db);
        console.log("======");
        // console.log(db("prospect").select("email_address").from("prospect"));
        // client('user').where("")
        return db("prospect").select("email_address");
    },
};
exports.default = ProspectService;
