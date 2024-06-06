import {describe} from "mocha";

const should = require('chai').should()
import {SevenRosterTags, Tags} from "../src"
import {expect} from "chai";

const sevenRosterTagValues = function(tags:Tags):string[] {
    // const isSevenRosterTag(tag: string): tag is SevenRosterTags {
    //     return true
    // }
    let key: keyof typeof tags
    let res: string[] = []
    for (key in tags) {
        // if (key instanceof SevenRoo
        // console.log("Key: " + key + " Value: " + tags[key])
    }
    return []
}

describe("When using tag types from the library", function (){
    it("should allow empty tags", function () {
        let result = sevenRosterTagValues(<Tags>{ Event: ''})
        should.exist(result)
        expect(result).to.eql([])
    })
})
