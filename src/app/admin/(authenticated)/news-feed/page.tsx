"use client";

import {
  ListHeader,
  LoadingIndicator,
  EmptyContainer,
  ConfirmationModal,
  Card,
} from "@components/admin";
import { PlusIcon } from "@components/admin/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NewsFeed as NewsFeedType } from "@/types/admin/api/news-feed";
import { toast } from "react-toastify";
import { useNewsFeed } from "@hooks/NewsFeed";
import { useNewsFeedsServices } from "@services/newsFeeds";

export default function NewsFeed() {
  const router = useRouter();
  const [showWarningModal, setWarningModal] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const { newsFeeds, setSelectedNewsFeed } = useNewsFeed();
  const { fetchNewsFeed, deleteNewsFeed, isFetching, isLoading } =
    useNewsFeedsServices();

  const deleteHandler = async (decision: boolean) => {
    if (decision) {
      await deleteNewsFeed(
        { newsFeedId: selected ?? "" },
        {
          onSuccess: () => {
            toast.success("News feed has been deleted successfully");
          },
        }
      );
    }
    setWarningModal(false);
  };

  useEffect(() => {
    fetchNewsFeed({});
  }, [newsFeeds]);

  return (
    <div>
      <ListHeader
        onNavigate={() => {
          router.push("news-feed/add");
        }}
        title="News Feed"
        icon={<PlusIcon />}
        addButtonText="Add News Feed"
        hasAddPermission={true}
      />
      <section className="mt-10 px-10 2xl:px-20 bg-transparent rounded-md min-h-screen">
        <div>
          {!isFetching && (newsFeeds == null || newsFeeds?.length === 0) ? (
            <EmptyContainer
              message={newsFeeds == null ? "Network error" : "No data found"}
            />
          ) : isFetching ? (
            <div className="w-full h-96 flex items-center justify-center">
              <LoadingIndicator />
            </div>
          ) : (
            <div>
              <div
                className="blade-bottom-padding grid mt-10 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-1 gap-4 md:gap-6 
              xl:gap-8 mr-auto"
              >
                {newsFeeds?.map((elem: NewsFeedType) => {
                  return (
                    <Card
                      imageURL={elem.coverImage}
                      onDelete={() => {
                        setWarningModal(true);
                        setSelected(elem._id);
                      }}
                      onNavigate={() => {
                        setSelectedNewsFeed(elem);
                        router.push("news-feed/update");
                      }}
                      data={elem}
                      key={elem._id}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
        {showWarningModal && (
          <ConfirmationModal
            heading="Are you sure?"
            title="Do you really want to delete this news feed? You can't restore this."
            callback={deleteHandler}
            isLoading={isLoading}
          />
        )}
      </section>
    </div>
  );
}
