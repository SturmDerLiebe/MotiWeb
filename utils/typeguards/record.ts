export function isStringRecord(
    record: Record<string, unknown>,
): record is Record<string, string> {
    return Object.values(record).every((element) => {
        return typeof element === "string";
    });
}
