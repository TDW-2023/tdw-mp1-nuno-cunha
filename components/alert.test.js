import { render, screen } from "@testing-library/react";
import Alert from "./alert";

test('Test "components/alert.js"', async () => {
  render(<Alert preview={true} />);

  const element = screen.getByText("Click here");
  expect(element).not.toBeNull();

  const element2 = document.createElement("div");
  expect(element2).not.toBeNull();
});
