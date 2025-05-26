"use client";

import Image from "next/image";
import { Divider, Input, Select, Tag } from "antd";
import { warrios } from "./MapComponent/data";
import { MapComponent } from "./MapComponent";

// const { Option } = Select;

export default function WarriosPage() {
  return (
    <div className="flex gap-10 mt-24 flex-col w-full h-full items-center justify-center">
      <div className="flex items-center justify-center"></div>
      <MapComponent />
      <div className="container flex w-full flex-col">
        <div className="text-2xl">
          DISCOVER CLIMATE TECH COMPANIES IN VIET NAM
        </div>
        <div className="flex w-full flex-col gap-4 mt-4">
          <div className="flex gap-2">
            <Input
              className="max-w-[250px]"
              placeholder="Search by name"
              // value={value.name}
              // onChange={handleSearchChange}
              size="large"
            />
            <Select
              mode="multiple"
              placeholder="Select tag"
              // value={value.tag || undefined}
              // onChange={handleTagChange}
              style={{ width: 400 }}
              maxTagCount={2}
              allowClear
              size="large"
            >
              {/* {Object.entries(TagDisplayName).map(([key, label]) => (
                <Option key={key} value={key}>
                  {label}
                </Option>
              ))} */}
            </Select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {warrios.map((item) => (
              <div
                className="flex flex-col rounded-md border border-gray-700 p-3"
                key={item.name}
              >
                <div className="flex flex-row gap-3">
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.url || "/logo.png"}
                      alt="Logo"
                      className="rounded-full max-w-[60px] max-h-[60px]"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex gap-1 flex-col">
                    <div className="flex font-semibold text-lg">
                      {item.name}
                    </div>
                    <div>
                      <Tag color="magenta">
                        {/* {
                          TagDisplayName[
                            item.tag as keyof typeof TagDisplayName
                          ]
                        } */}
                      </Tag>
                    </div>
                  </div>
                </div>
                <Divider />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
