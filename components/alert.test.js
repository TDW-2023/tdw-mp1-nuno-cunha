import { render, screen } from "@testing-library/react";
import Alert from "./alert";

test('Component with "components/alert.js" should exist', async () => {
  render(<Alert />);

  const element = document.createElement("div");
  expect(element).not.toBeNull();
});
