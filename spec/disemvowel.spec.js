describe ("Disemvowel",function (){
    it("remove all lowercase vowels",function () {
        expect(disemvowel("Microsoft")).toEqual("Mcrsft")
    });
    it("remove all uppercase vowels",function () {
        expect(disemvowel("Eagle")).toEqual("gl")
    });
    it("shouldnt change empty strings", function (){
        expect(disemvowel("")).toEqual("")
    });
    it("shouldnt change strings with no vowels", function(){
        expect(disemvowel("str")).toEqual("str")
    });
})