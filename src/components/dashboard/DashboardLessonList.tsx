import { Button, H4, H6, Intent } from "@blueprintjs/core"
import * as React from "react"

const DashboardLessonList = () => {
  return (
    <div className="w33 pt-5 pl-3">
      <div className="w100 d-inline-flex">
        <H4 className="w83 pb-2 pl-3 mb-0 subtitle-underline bp3-heading mr-3">Lessons</H4>
        <Button className="px-3 mr-2" intent={Intent.PRIMARY} text="Library..." />
        <Button className="px-3" icon="add" intent={Intent.SUCCESS} text="Create" />
      </div>
      <div className="pl-4 mt-3 w100">
        <H6 className="">Recent</H6>
        <ul className="bp3-list bp3-list-unstyled w100">
          <li className="d-inline-flex w100">
            <div className="d-inline-flex w100 pl-3 bp3-text-overflow-ellipsis d-block recent-worksheet">
              <div className="align-self-center">Long Division</div>
              <Button
                minimal
                icon="small-cross"
                intent={Intent.DANGER}
                className="delete-worksheet-button ml-auto"
              />
            </div>
          </li>
          <li className="d-inline-flex w100">
            <div className="d-inline-flex w100 pl-3 bp3-text-overflow-ellipsis d-block recent-worksheet">
              <div className="align-self-center">Quadratic Equation Basics</div>
              <Button
                minimal
                icon="small-cross"
                intent={Intent.DANGER}
                className="delete-worksheet-button ml-auto"
              />
            </div>
          </li>
          <li className="d-inline-flex w100">
            <div className="d-inline-flex w100 pl-3 bp3-text-overflow-ellipsis d-block recent-worksheet">
              <div className="align-self-center">Mean, Median, Mode</div>
              <Button
                minimal
                icon="small-cross"
                intent={Intent.DANGER}
                className="delete-worksheet-button ml-auto"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardLessonList
