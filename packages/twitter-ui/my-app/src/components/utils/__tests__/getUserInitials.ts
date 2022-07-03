import getUserInitials from "../getUserInitials";

test("should return the initials correctly", () => {
  const name1 = "Juan García";
  const name2 = "Christoper Francisco";
  expect(getUserInitials(name1)).toBe("J G");

  expect(getUserInitials(name2)).toBe("C F");
});
