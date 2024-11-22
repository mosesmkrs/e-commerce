import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/categoryForm";

const CategoryPage = async ({ 
    params 
}: { 
    params: { 
        categoryId: string 
        storeId: string 
    } }) => {

    const { categoryId } = await params;
    const category = await prismadb.category.findUnique({
    where: { 
        id: categoryId 
    },
    });

    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (    
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm 
                initialData={category} 
                billboards={billboards}/>
            </div>
        </div>
    )
}

export default CategoryPage
