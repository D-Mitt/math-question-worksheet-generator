import { Classes, Menu, MenuDivider, MenuItem } from "@blueprintjs/core"
import React from "react"
import { useDispatch } from "react-redux"
import { setIsWorksheetDialogDisplayed } from "../store/dashboard/DashboardActions"
import {
  setSelectedWorksheetCategory,
  setSelectedWorksheetSubCategory,
} from "../store/worksheet/WorksheetActions"
import {
  additionSubCategories,
  categories,
  Category,
  defaultSubCategories,
  SelectCategory,
  SelectSubCategory,
} from "../store/worksheet/WorksheetConstants"

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleGenerateWorksheet = (cat: string, subCat: string) => {
    const defaultSelectCategory: SelectCategory = { name: Category.None, isSelectable: true }
    let subCategoryList: SelectSubCategory[] = []
    let categoryToSet = categories.find(category => {
      return category.name === cat
    })
    if (!categoryToSet) {
      categoryToSet = defaultSelectCategory
    }

    switch (cat) {
      case "Addition":
        subCategoryList = additionSubCategories
        break
      default:
        subCategoryList = defaultSubCategories
        break
    }

    let subCategoryToSet = subCategoryList.find(subCategory => {
      return subCategory.name === subCat
    })
    if (!subCategoryToSet) {
      subCategoryToSet = defaultSubCategories[0]
    }

    dispatch(setSelectedWorksheetCategory(categoryToSet))
    dispatch(setSelectedWorksheetSubCategory(subCategoryToSet))
    dispatch(setIsWorksheetDialogDisplayed(true))
  }

  const displaySubjects = (cats: SelectCategory[]) => {
    let subCategoryList: SelectSubCategory[] = []
    const menuItems = cats.map(cat => {
      switch (cat.name) {
        case "Addition":
          subCategoryList = additionSubCategories.slice(1, additionSubCategories.length)
          break
        default:
          subCategoryList = defaultSubCategories
          break
      }

      const subMenuItems = subCategoryList.map((subCat, i) => {
        return (
          <MenuItem key={`${subCat.name}-${i}`} text={subCat.name} disabled={!subCat.isSelectable}>
            <MenuItem
              text="Generate Worksheet"
              onClick={() => handleGenerateWorksheet(cat.name, subCat.name)}
            />
            <MenuItem text="Go to Lesson" disabled />
          </MenuItem>
        )
      })

      return (
        <MenuItem disabled={!cat.isSelectable} key={`menu-item-${cat.name}`} text={cat.name}>
          {subMenuItems}
        </MenuItem>
      )
    })
    return menuItems
  }

  return (
    <div className={`${Classes.DARK} sidebar dark-mode-background`}>
      <Menu large>
        <MenuDivider title="Subjects" />
        {displaySubjects(categories.slice(1, categories.length))}
      </Menu>
    </div>
  )
}

export default Sidebar
