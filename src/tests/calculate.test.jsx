import { test, expect, afterEach } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../Calculator";

afterEach(() => {
    cleanup();
})

test("Calculate addition", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("first number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "+");

    const secondNumInput = screen.getByPlaceholderText("second number");
    userEvent.type(secondNumInput, "7");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("7");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() => {
        expect(screen.getByPlaceholderText("result").value).toBe("12");
    });
});

test("Calculate subtraction", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("first number");
    userEvent.type(firstNumInput, "10");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("10");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "-");

    const secondNumInput = screen.getByPlaceholderText("second number");
    userEvent.type(secondNumInput, "4");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("4");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() => {
        expect(screen.getByPlaceholderText("result").value).toBe("6");
    });
});

test("Calculate multiplication", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("first number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "*");

    const secondNumInput = screen.getByPlaceholderText("second number");
    userEvent.type(secondNumInput, "3");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("3");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() => {
        expect(screen.getByPlaceholderText("result").value).toBe("15");
    });
});

test("Calculate division", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("first number");
    userEvent.type(firstNumInput, "8");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("8");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "/");

    const secondNumInput = screen.getByPlaceholderText("second number");
    userEvent.type(secondNumInput, "4");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("4");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() => {
        expect(screen.getByPlaceholderText("result").value).toBe("2");
    });
});