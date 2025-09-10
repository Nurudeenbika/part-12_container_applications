import { render, screen, within } from "@testing-library/react";
import { expect, vi, test } from "vitest";
import Todo from "./Todo";
import userEvent from "@testing-library/user-event";

//import { render, screen, within } from "@testing-library/react"
//import userEvent from "@testing-library/user-event"
//import Todo from "./Todo"

test("calls onClickDelete when delete button is clicked", async () => {
  const user = userEvent.setup();
  const handleDelete = vi.fn();

  render(
    <Todo
      todo={{ text: "Test todo", done: false }}
      onClickDelete={handleDelete}
      onClickComplete={() => {}}
    />
  );

  // Narrow the search: find the todo container first
  const todoElement = screen.getByText(/Test todo/i).closest("div");
  const deleteButton = within(todoElement).getByRole("button", {
    name: /Delete/i,
  });

  await user.click(deleteButton);

  expect(handleDelete).toHaveBeenCalledTimes(1);
});

test("calls onClickComplete when done button is clicked", async () => {
  const user = userEvent.setup();
  const handleComplete = vi.fn();

  render(
    <Todo
      todo={{ text: "Test todo", done: false }}
      onClickDelete={() => {}}
      onClickComplete={handleComplete}
    />
  );

  // Narrow the search: find the todo container first
  const todoElement = screen.getByText(/Test todo/i).closest("div");
  const doneButton = within(todoElement).getByRole("button", {
    name: /Set as done/i,
  });

  await user.click(doneButton);

  expect(handleComplete).toHaveBeenCalledTimes(1);
});
