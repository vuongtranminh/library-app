import React, { useEffect, useState } from 'react';
import AssetLoan from '~/components/asset-loan/AssetLoan';
import AssetLoanTable from '~/components/asset-loan/AssetLoanTable';
import Grid from '~/components/common/Grid';
import Table, { TableBody } from '~/components/common/Table';
import Tabs, { Tab, TabsContent, TabsNav, TabsPane } from '~/components/common/Tabs';
import Section, { SectionBody, SectionTitle } from '~/components/common/Section';

const Board = () => {
    const [isLoading, setIsLoading] = useState(true);

    const createData = (name, calories, fat, carbs, protein) => {
        return { name, calories, fat, carbs, protein };
    };

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    useEffect(() => {
        setTimeout(() => {
            // setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="asset-loan">
            <Tabs>
                <TabsNav>
                    <Tab>S??? d?? t??i kho???n</Tab>
                    <Tab>Th??ng tin t??i s???n v?? n???</Tab>
                    <Tab>Tra c???u v?? x??c nh???n l???nh</Tab>
                </TabsNav>
                <TabsContent>
                    <TabsPane></TabsPane>
                    <TabsPane>
                        <div className="row">
                            <div className="col-3 col-md-6 col-sm-12">
                                <Section>
                                    <SectionTitle>
                                        <div className="text--head">Th??ng tin T??i s???n v?? N???</div>
                                    </SectionTitle>
                                    <SectionBody>
                                        <div className="asset-loan__info">
                                            <AssetLoan />
                                        </div>
                                    </SectionBody>
                                </Section>
                            </div>
                            <div className="col-3 col-md-6 col-sm-12">
                                <Section>
                                    <SectionTitle>
                                        <div className="text--head">Th??ng tin Margin</div>
                                    </SectionTitle>
                                    <SectionBody></SectionBody>
                                </Section>
                            </div>
                            <div className="col-6 col-md-12 col-sm-12">
                                <Section>
                                    <SectionTitle>
                                        <div className="text--head">Chi ti???t n??? vay</div>
                                    </SectionTitle>
                                    <SectionBody>
                                        <div className="asset-loan__table">
                                            <AssetLoanTable data={rows} />
                                        </div>
                                    </SectionBody>
                                </Section>
                            </div>
                        </div>
                    </TabsPane>
                    <TabsPane></TabsPane>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Board;
