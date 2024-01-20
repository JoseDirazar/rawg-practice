import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationGames({ page }: { page: number }) {
  return (
    <Pagination className="py-3">
      <PaginationContent>
        <PaginationItem>
          {page > 1 ? (
            <PaginationPrevious
              href={{
                pathname: "/",
                query: { page: page - 1 },
              }}
            />
          ) : (
            <PaginationPrevious
              href={{
                pathname: "/",
                query: { page: page },
              }}
            />
          )}
        </PaginationItem>
        {page > 2 && (
          <PaginationItem>
            <PaginationLink
              href={{
                pathname: "/",
                query: { page: page - 2 },
              }}
            >
              {page - 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {page > 1 && (
          <PaginationItem>
            <PaginationLink
              href={{
                pathname: "/",
                query: { page: page - 1 },
              }}
            >
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={{
              pathname: "/",
              query: { page: page + 1 },
            }}
          >
            {page + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={{
              pathname: "/",
              query: { page: page + 2 },
            }}
          >
            {page + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={{
              pathname: "/",
              query: { page: page + 1 },
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
