import { AnchorButton, Button, H5, MenuItem } from "@blueprintjs/core"
import { ItemPredicate, ItemRenderer, Select } from "@blueprintjs/select"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { State } from "../../store/store"
import {
  setSelectedWorksheetCategory,
  setSelectedWorksheetSubCategory,
} from "../../store/worksheet/WorksheetActions"
import {
  categories,
  Category,
  SelectCategory,
  SelectSubCategory,
} from "../../store/worksheet/WorksheetConstants"

const CategorySelect = Select.ofType<SelectCategory>()
const SubCategorySelect = Select.ofType<SelectSubCategory>()

const WorksheetDialogCategorySelector = () => {
  const dispatch = useDispatch()
  const selectedCategory = useSelector((state: State) => state.worksheet.selectedCreationCategory)
  const selectedSubCategory = useSelector(
    (state: State) => state.worksheet.selectedCreationSubCategory
  )
  const subCategoryList = useSelector((state: State) => state.worksheet.creationSubCategoryList)
  const selectCategory = (activeItem: SelectCategory) => {
    dispatch(setSelectedWorksheetCategory(activeItem))
  }
  const selectSubCategory = (subActiveItem: SelectSubCategory) => {
    dispatch(setSelectedWorksheetSubCategory(subActiveItem))
  }

  const filterCategory: ItemPredicate<SelectCategory> = (query, category) => {
    return category.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
  }

  const renderCategory: ItemRenderer<SelectCategory> = (category, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) {
      return null
    }
    return (
      <MenuItem
        active={modifiers.active}
        key={category.name}
        onClick={handleClick}
        text={category.name}
        disabled={!category.isSelectable}
      />
    )
  }

  const handleCategoryItemChange = (active: SelectCategory | null) => {
    if (active) {
      selectCategory(active)
    }
  }

  // Sub Categories
  const filterSubCategory: ItemPredicate<SelectSubCategory> = (query, subCategory) => {
    return subCategory.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
  }

  const renderSubCategory: ItemRenderer<SelectSubCategory> = (
    subCategory,
    { handleClick, modifiers }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null
    }
    return (
      <MenuItem
        active={modifiers.active}
        key={subCategory.name}
        onClick={handleClick}
        text={subCategory.name}
        disabled={!subCategory.isSelectable}
      />
    )
  }

  const handleSubCategoryItemChange = (activeSub: SelectSubCategory | null) => {
    if (activeSub) {
      selectSubCategory(activeSub)
    }
  }

  return (
    <div className="bottom-divider-dark-mode pb-3 mb-3">
      <div className="d-flex mb-3">
        <H5 className="mb-1 align-self-center w25">Select a Category:</H5>
        <CategorySelect
          noResults={<MenuItem disabled text="No results." />}
          items={categories}
          filterable
          itemRenderer={renderCategory}
          itemPredicate={filterCategory}
          onItemSelect={handleCategoryItemChange}
          itemsEqual="name"
          resetOnSelect
        >
          <Button
            text={selectedCategory ? `${selectedCategory.name}` : "Select a Category..."}
            rightIcon="double-caret-vertical"
          />
        </CategorySelect>
      </div>
      <div className="d-flex">
        <H5 className="mb-1 align-self-center w25">Select a Sub-Category:</H5>
        <SubCategorySelect
          noResults={<MenuItem disabled text="No results." />}
          items={subCategoryList}
          filterable
          itemRenderer={renderSubCategory}
          itemPredicate={filterSubCategory}
          onItemSelect={handleSubCategoryItemChange}
          itemsEqual="name"
          resetOnSelect
          disabled={selectedCategory.name === Category.None.toString()}
        >
          <AnchorButton
            text={selectedSubCategory ? `${selectedSubCategory.name}` : "Select a Sub-Category..."}
            rightIcon="double-caret-vertical"
            disabled={selectedCategory.name === Category.None.toString()}
          />
        </SubCategorySelect>
      </div>
    </div>
  )
}

export default WorksheetDialogCategorySelector
