"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const megaMenu = [
    {
        title : "Top Booked",
        services : [
            {
                title : "Telehealth",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "Video prescription refill",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "In-person doctor visit",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "UTI consult",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },

        ]
    },
    {
        title : "Doctors",
        services : [
            {
                title : "Telehealth",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "Video prescription refill",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "In-person doctor visit",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "UTI consult",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },

        ]
    },
    {
        title : "Specialists",
        services : [
            {
                title : "Telehealth",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "Video prescription refill",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "In-person doctor visit",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "UTI consult",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },

        ]
    },
    {
        title : "Symptoms",
        services : [
            {
                title : "Telehealth",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "Video prescription refill",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "In-person doctor visit",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },
            {
                title : "UTI consult",
                slug : "telehealth",
                description : "lorem Duis purus libero, bibendum ac nibh sed, bibendum malesuada orci. Suspendisse luctus arcu risus. Etiam quam purus, cursus vel commodo sit amet, rutrum ac quam. Praesent congue magna sem, tristique porta nunc luctus nec. Morbi mauris ex, venenatis finibus pretium ut, tincidunt eget sapien. Mauris porta et mauris et ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae ipsum tempor, gravida metus a, convallis massa. Nullam et tristique mauris, in ornare lorem. In vestibulum euismod sem at eleifend. Mauris tincidunt ut eros vitae consectetur. Vivamus enim felis, scelerisque et interdum ut, gravida a odio."
            },

        ]
    },

]
export default function MegaMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    megaMenu.map((items, i) => {
                        return(
                            <NavigationMenuItem key={i}>
                                <NavigationMenuTrigger>{items.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]     md:grid-cols-2 lg:w-[600px] ">
                                        {items.services.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={`/services/${component.slug}`}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    })
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
