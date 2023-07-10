import {describe, test} from "vitest";
import {LangMode} from "@/models/langMode";

describe("言語モード", () => {

    test("ofでインスタンス生成", () => {
        expect(LangMode.of("ja2en")).toBe(LangMode.ja2en)
        expect(LangMode.of("en2ja")).toBe(LangMode.en2ja)
    })

    test("ofで存在しない言語モードを指定するとエラー", () => {
        expect(() => LangMode.of("ja2ja")).toThrow()
    })
})