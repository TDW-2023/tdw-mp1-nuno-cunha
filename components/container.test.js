import { render, screen } from "@testing-library/react";
import Container from "./container";

test('Test "components/container.js"', async () => {
  render(<Container />);

  const element = screen.getByRole("div_container");
  expect(element).not.toBeNull();

  const element2 = document.createElement("div");
  expect(element2).not.toBeNull();
});
