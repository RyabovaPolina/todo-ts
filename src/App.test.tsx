/// <reference types="vitest" />

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("добавляет новую задачу", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/введите текст задачи/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Купить хлеб" } });
  fireEvent.click(button);

  expect(screen.getByText("Купить хлеб")).toBeInTheDocument();
});

test("отмечает задачу как выполненную", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/введите текст задачи/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Сделать дз" } });
  fireEvent.click(button);

  const newTodo = screen.getByText("Сделать дз");
  const checkbox = newTodo
    .closest(".todo-item")!
    .querySelector('input[type="checkbox"]');
  fireEvent.click(checkbox!);

  expect(newTodo.closest(".todo-item")).toHaveClass("completed");
});

test("фильтрует задачи: выполненные / невыполненные", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/введите текст задачи/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Задача 1" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "Задача 2" } });
  fireEvent.click(button);

  const task1 = screen.getByText("Задача 1");
  const checkbox1 = task1
    .closest(".todo-item")!
    .querySelector('input[type="checkbox"]');
  fireEvent.click(checkbox1!);

  fireEvent.click(screen.getByRole("button", { name: /^completed$/i }));
  expect(screen.getByText("Задача 1")).toBeInTheDocument();
  expect(screen.queryByText("Задача 2")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /^active$/i }));
  expect(screen.getByText("Задача 2")).toBeInTheDocument();
  expect(screen.queryByText("Задача 1")).not.toBeInTheDocument();
});

test("проверка очищения завершенных задач", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/введите текст задачи/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Задача 1" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "Задача 2" } });
  fireEvent.click(button);

  const task1 = screen.getByText("Задача 1");
  const checkbox1 = task1
    .closest(".todo-item")!
    .querySelector('input[type="checkbox"]');
  fireEvent.click(checkbox1!);

  const task2 = screen.getByText("haha");
  const checkbox2 = task2
    .closest(".todo-item")!
    .querySelector('input[type="checkbox"]');
  fireEvent.click(checkbox2!);

  fireEvent.click(screen.getByRole("button", { name: /^clear completed$/i }));
  expect(screen.getByText("Задача 2")).toBeInTheDocument();
  expect(screen.queryByText("Задача 1")).not.toBeInTheDocument();
  expect(screen.queryByText("haha")).not.toBeInTheDocument();
});
