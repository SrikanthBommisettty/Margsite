import React from "react";

import { Img, Input, SelectBox, Text } from "components";

const componentTwentyFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const viewMoreOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Frame48096505ColumnSix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-yellow-50 flex flex-col items-center justify-end p-[17px] w-full">
          <Text
            className="text-center text-gray-900 text-lg"
            size="txtOutfitMedium18Gray900"
          >
            {props?.advancesearch}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center w-[382px] md:w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-[334px]">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-amber-600 text-lg w-auto"
                size="txtLexendRegular18Amber600"
              >
                {props?.basicdetails}
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <SelectBox
                  className="!text-gray-900 border border-gray-300_01 border-solid font-outfit text-base text-left w-full"
                  placeholderClassName="!text-gray-900"
                  indicator={
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="componentTwentyFour"
                  options={componentTwentyFourOptionsList}
                  isSearchable={false}
                  placeholder="18-22"
                  shape="round"
                  color="white_A700"
                  size="sm"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtOutfitRegular16Black900"
                  >
                    {props?.height}
                  </Text>
                  <Input
                    name="frame48096548"
                    placeholder="4’7” - 5’2”"
                    className="!placeholder:text-gray-900 !text-gray-900 font-outfit p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid rounded-md w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-amber-600 text-lg w-auto"
                size="txtLexendRegular18Amber600"
              >
                {props?.castereligion}
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtOutfitRegular16Black900"
                  >
                    {props?.religionOne}
                  </Text>
                  <Input
                    name="frame48096549"
                    placeholder="Christian"
                    className="!placeholder:text-gray-900 !text-gray-900 font-outfit p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid rounded-md w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtOutfitRegular16Black900"
                  >
                    {props?.caste}
                  </Text>
                  <Input
                    name="frame48096549_One"
                    placeholder="Caste"
                    className="!placeholder:text-gray-900 !text-gray-900 font-outfit p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid rounded-md w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtOutfitRegular16Black900"
                  >
                    {props?.subcaste}
                  </Text>
                  <Input
                    name="frame48096549_Two"
                    placeholder="Sub-Caste"
                    className="!placeholder:text-gray-900 !text-gray-900 font-outfit p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid rounded-md w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-6 w-full">
          <SelectBox
            className="!text-white-A700 font-medium font-outfit leading-[normal] rounded-lg text-center text-lg tracking-[1.00px] w-2/5 sm:w-full"
            placeholderClassName="!text-white-A700"
            indicator={
              <Img
                className="h-4 w-4"
                src="images/img_arrowdown_white_a700.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="frame48096532"
            options={viewMoreOptionsList}
            isSearchable={false}
            placeholder="View more"
            shape="round"
          />
        </div>
      </div>
    </>
  );
};

Frame48096505ColumnSix.defaultProps = {
  advancesearch: "Advance Search",
  basicdetails: "Basic Details",
  height: "Height",
  castereligion: "Caste & Religion Details",
  religionOne: "Religion",
  caste: "Caste",
  subcaste: "Sub-Caste",
};

export default Frame48096505ColumnSix;
