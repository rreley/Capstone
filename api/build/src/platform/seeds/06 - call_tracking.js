"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("call_tracking").del();
        // Inserts seed entries
        yield knex("call_tracking").insert([
            {
                prospect_tnum: "T-00003338",
                caller: 1,
                campaign_id: 1,
                number_times_called: 0,
                call_disposition: null,
                call_notes: null,
                was_emailed: false,
                date_emailed: null,
                email_text: null,
            },
        ]);
    });
}
exports.seed = seed;
