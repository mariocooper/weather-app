import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Cornwall",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a search box", () => {
    const { getByRole } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("handles event change when button is clicked", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
