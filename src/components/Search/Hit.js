import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    title={hit.title}
    slug={hit.fields.slug}
    background={hit.background}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
)

export default Hit
