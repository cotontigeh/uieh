import { useEffect, useMemo, useState } from "react";
import { Tabs, TabLink } from "uieh";

type DocTabsProps = {
  children: React.ReactNode;
  id: string;
};

export const DocTabs = ({ id, children }: DocTabsProps) => {
  const [tabs, setTabs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);

    const $allTabsContent = document
      .getElementById(id)
      ?.querySelectorAll(`.doc-tab-item`);

    const $newActiveTabContent = document
      .getElementById(id)
      ?.querySelector(`#${tab}`);

    // Hide all tabs content
    $allTabsContent?.forEach((tab) => {
      tab.classList.add("hidden");
    });

    // Show the new active tab content
    $newActiveTabContent?.classList.remove("hidden");
  };

  useEffect(() => {
    const $tabs = document
      .getElementById(id)
      ?.querySelectorAll(`.doc-tab-item`);

    const tabLabels: string[] = [];
    $tabs?.forEach((tab) => {
      const label = tab.getAttribute("id");
      if (label) {
        tabLabels.push(label);
      }
    });

    setTabs(tabLabels);
    setActiveTab(tabLabels[0]);
    handleClick(tabLabels[0]);
  }, []);

  return (
    <div id={id}>
      <Tabs className="mb-4">
        {tabs.map((tab) => (
          <TabLink
            key={tab}
            active={activeTab === tab}
            onClick={() => handleClick(tab)}
          >
            {tab}
          </TabLink>
        ))}
      </Tabs>

      {children}
    </div>
  );
};

export type DocTabItemProps = {
  label: string;
  children: React.ReactNode;
};

export const DocTabsItem = ({ label, children }: DocTabItemProps) => {
  return (
    <div className="doc-tab-item hidden" id={label}>
      {children}
    </div>
  );
};
