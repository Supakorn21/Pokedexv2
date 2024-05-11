
import { Select, Input } from "antd";
import {generationList, sortList, typesList} from '@/utils/optionList'
// import app.css
import "@/index.scss";




function SearchForm() {

    const getGenerationOptions = () => {
        return generationList.map((item,index) => {
            const generationKey = `generation-key-${index}`;
            return {
              value: index,
              key: generationKey,
              label: <span>{item.name}</span>,
            };
        });
    }

    const generateTypeOptions = () => {
        return typesList.map((item, index) => {
            const typeKey = `type-key-${index}`;
            return {
              value: index,
              key: typeKey,
              label: <span>{item}</span>,
            };
        });
    }

    const generateSortOptions = () => {
        return sortList.map((item, index) => {
            const sortKey = `sort-key-${index}`;
            return {
              value: index,
              key: sortKey,
              label: <span>{item}</span>,
            };
        });
    }



    const selectStyles = {
        width: 200,
        color: "white",
        borderColor: "white",
    };



    return (
      <div className="grid grid-cols-4">
        <div className="col-span-1 w-[200px] flex flex-col">
          <label
            htmlFor="generation"
            className="black mb-2 text-mb-1 font-medium"
            style={{ color: "var(--color-brown)" }}
          >
            Generation
          </label>
          <Select
            id="generation"
            placeholder="Select Generation"
            options={getGenerationOptions()}
            style={selectStyles}
          />
        </div>
        <div className="col-span-1 w-[200px] flex flex-col">
          <label
            htmlFor="type"
            className="black mb-2 text-mb-1 font-medium"
            style={{ color: "var(--color-brown)" }}
          >
            Type
          </label>
          <Select
            id="type"
            placeholder="Select Type"
            options={generateTypeOptions()}
            style={selectStyles}
          />
        </div>
        <div className="col-span-1 w-[200px] flex flex-col">
          <label
            htmlFor="sort_by"
            className="black mb-2 text-mb-1 font-medium"
            style={{ color: "var(--color-brown)" }}
          >
            Sort By
          </label>
          <Select
            id="sort_by"
            placeholder="Sort By"
            options={generateSortOptions()}
            style={selectStyles}
          />
        </div>
        <div className="col-span-1 w-[200px] flex flex-col">
          <label
            htmlFor="search"
            className="black mb-2 text-mb-1 font-medium"
            style={{ color: "var(--color-brown)" }}
          >
            Search
          </label>
          <Input placeholder="Search" />
        </div>
      </div>
    );
}

export default SearchForm
