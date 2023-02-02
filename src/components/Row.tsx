import React from "react";

interface RowProps {
    title: string;
    fetchUrl: string;
    isLargeRow: boolean;
}

export default function Row({ title, fetchUrl, isLargeRow }: RowProps) {
    return <div>Row</div>;
}
