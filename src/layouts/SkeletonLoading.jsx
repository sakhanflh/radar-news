export function SkeletonLoading({ width, height, className }) {
    return (
        <div
            className={`animate-pulse bg-gray-200 ${className}`}
            style={{ width, height }}
        ></div>
    );
}
