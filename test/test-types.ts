import {describe} from "mocha";

const should = require('chai').should()
import {SevenRoosterTags, Tags} from "../src"
import {expect} from "chai";

const sevenRoosterTagValues = function(tags:Tags):string[] {
    // const isSevenRoosterTag(tag: string): tag is SevenRoosterTags {
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
        let result = sevenRoosterTagValues(<Tags>{ Event: ''})
        should.exist(result)
        expect(result).to.eql([])
    })
})