import { render, screen } from "@testing-library/react";
import Layout from "./layout";

test('Test "components/layout.js"', async () => {
  render(<Layout />);

  const element = screen.getByRole("div_alert");
  expect(element).not.toBeNull();

  const element2 = document.createElement("div");
  expect(element2).not.toBeNull();
});
