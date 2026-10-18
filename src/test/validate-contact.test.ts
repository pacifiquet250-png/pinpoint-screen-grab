import { describe, expect, it } from "vitest";
import { validateContact } from "@/lib/validate-contact";

describe("contact validation", () => {
  it("requires all fields", () => {
    expect(Object.keys(validateContact({})).sort()).toEqual(["email", "message", "name", "subject"]);
  });
  it("rejects invalid email", () => {
    expect(validateContact({ name: "Ada", email: "bad", subject: "Hello", message: "A long enough message" }).email).toBeTruthy();
  });
  it("accepts valid input", () => {
    expect(validateContact({ name: "Ada", email: "a@b.co", subject: "Hello", message: "A long enough message" })).toEqual({});
  });
});
