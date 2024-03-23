"use client";

import React, { useState } from "react";
import UserCard from "./UserCard";
import data from "../../public/data/data.json";
import Image from "next/image";


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select"

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";


import { Button } from "../ui/button";

import { Input } from "../ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import GameCard from "./GameCard";

export const columns = [
    {
        accessorKey: "rank",
        header: "Rank",
        cell: ({ row }) => (
            <div className="text-center bg-[#292932] rounded-full px-6 min-w-[40px] py-2">{row.getValue("rank")}</div>
        ),
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "region",
        header: "Region"
    },
    {
        accessorKey: "course",
        header: "Course"
    },
    {
        accessorKey: "game",
        header: "Game"
    },
    {
        accessorKey: "player",
        header: "Name",
        cell: ({ row }) => (
            <UserCard data={row} />
        ),
    },
    {
        accessorKey: "gross",
        header: "Gross",
        cell: ({ row }) => (
            <div className="text-center bg-[#292932] rounded-full px-5 min-w-[40px] py-2">{row.getValue("gross")}</div>
        ),
    },
    {
        accessorKey: "net",
        header: "Net",
        cell: ({ row }) => (
            <div className="text-center bg-[#292932] rounded-full px-5 min-w-[40px] py-2">{row.getValue("net")}</div>
        ),
    },
    {
        accessorKey: "handicap",
        header: "Handicap",
        cell: ({ row }) => (
            <div className="text-center bg-[#292932] rounded-full  px-5 min-w-[40px] py-2">{row.getValue("handicap")}</div>
        ),
    },
    {
        accessorKey: "smashCash",
        header: "Smash Cash",
        cell: ({ row }) => (
            <div className="text-center bg-[#292932] rounded-full flex items-center justify-center  px-5 min-w-[40px] py-2">
                <Image className="mr-2" width="20" height="20" src="/coin.svg" alt="" />
                {row.getValue("smashCash")}
            </div>
        ),
    },
    {
        accessorKey: "mostPlayed",
        header: "Most Played",
        cell: ({ row }) => (
            <div className="flex items-center">
                <GameCard data={row} />
            </div>

        ),
    }

];

export default function DataTable() {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            rowSelection,
            columnVisibility: {
                'region': false,
                'course': false,
                'game': false,
                "name": false
            }
        },
    });

    return (
        <div className="w-ful bg-lightblue rounded-lg p-4 mb-4">
            <div className="flex items-center py-4 justify-around">
                <h4>Longest Drive</h4>
                <Select onValueChange={(value) => {
                    const newValue = value === "All" ? "" : value;
                    table.getColumn("region")?.setFilterValue(newValue);
                }} >
                    <SelectTrigger className="w-[180px] bg-transparent">
                        <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Region</SelectLabel>
                            <SelectItem value="All">All</SelectItem>
                            <SelectItem value="Global">Global</SelectItem>
                            <SelectItem value="USA">USA</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => {
                    const newValue = value === "All" ? "" : value;
                    table.getColumn("course")?.setFilterValue(newValue);
                }} >
                    <SelectTrigger className="w-[180px] bg-transparent">
                        <SelectValue placeholder="Course" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Course</SelectLabel>
                            <SelectItem value="All">All</SelectItem>
                            <SelectItem value="Dobson Ranch">Dobson Ranch</SelectItem>
                            <SelectItem value="Shalimar">Shalimar</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => {
                    const newValue = value === "All" ? "" : value;
                    table.getColumn("game")?.setFilterValue(newValue);
                }} >
                    <SelectTrigger className="w-[180px] bg-transparent">
                        <SelectValue placeholder="Game" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Game</SelectLabel>
                            <SelectItem value="All">All</SelectItem>
                            <SelectItem value="Longest Drive">Longest Drive</SelectItem>
                            <SelectItem value="Short Drive">Short Drive</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Input
                    placeholder="Search..."
                    value={(table.getColumn("name")?.getFilterValue() || "")}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm bg-transparent text-white placeholder:text-white"
                />
            </div>
            <div className="rounded-md ">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="space-x-2">
                    <Button
                        className="bg-white text-black hover:bg-white"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        className="bg-white text-black hover:bg-white"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}